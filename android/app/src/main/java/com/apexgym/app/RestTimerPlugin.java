package com.apexgym.app;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.content.Context;
import android.os.Build;
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
        long endAt = System.currentTimeMillis() + (long) delaySeconds * 1000L;

        ensureChannel();

        NotificationCompat.Builder builder = new NotificationCompat.Builder(getContext(), CHANNEL_ID)
            .setContentTitle(title)
            .setContentText(body)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .setUsesChronometer(true)
            .setChronometerCountDown(true)
            .setWhen(endAt)
            .setShowWhen(true)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setCategory(NotificationCompat.CATEGORY_STOPWATCH);

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
