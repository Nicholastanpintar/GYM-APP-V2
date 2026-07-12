package com.apexgym.app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
import android.os.SystemClock;
import android.widget.RemoteViews;
import androidx.core.app.NotificationCompat;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "RestTimer")
public class RestTimerPlugin extends Plugin {
    private static final String CHANNEL_ID = "apex_rest_timer";

    private void ensureChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationManager nm = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm.getNotificationChannel(CHANNEL_ID) == null) {
                NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "Rest Timer", NotificationManager.IMPORTANCE_LOW);
                channel.setDescription("Live countdown while resting between sets");
                channel.setShowBadge(false);
                nm.createNotificationChannel(channel);
            }
        }
    }

    @PluginMethod
    public void showCountdown(PluginCall call) {
        String title = call.getString("title", "Resting");
        String body = call.getString("body", "");
        Integer delaySeconds = call.getInt("delaySeconds");
        int id = call.getInt("id", 4472);
        if (delaySeconds == null) {
            call.reject("delaySeconds is required");
            return;
        }
        // Chronometer's base must be in elapsedRealtime, NOT wall-clock time (unlike Notification.setWhen).
        long base = SystemClock.elapsedRealtime() + (long) delaySeconds * 1000L;

        ensureChannel();

        RemoteViews views = new RemoteViews(getContext().getPackageName(), R.layout.notification_rest_timer);
        views.setTextViewText(R.id.rest_timer_title, title);
        views.setTextViewText(R.id.rest_timer_body, body);
        views.setChronometer(R.id.rest_timer_chronometer, base, null, true);
        views.setChronometerCountDown(R.id.rest_timer_chronometer, true);

        NotificationCompat.Builder builder = new NotificationCompat.Builder(getContext(), CHANNEL_ID)
            .setContentTitle(title)
            .setContentText(body)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setCategory(NotificationCompat.CATEGORY_STOPWATCH)
            .setCustomContentView(views)
            .setCustomBigContentView(views)
            .setStyle(new NotificationCompat.DecoratedCustomViewStyle());

        NotificationManager nm = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
        nm.notify(id, builder.build());

        call.resolve();
    }

    @PluginMethod
    public void cancelCountdown(PluginCall call) {
        int id = call.getInt("id", 4472);
        NotificationManager nm = (NotificationManager) getContext().getSystemService(Context.NOTIFICATION_SERVICE);
        nm.cancel(id);
        call.resolve();
    }
}
