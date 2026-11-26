# Telemetry and diagnostics

This fork does not send product usage events, agent feedback, relay traces, mobile crash reports,
or OpenTelemetry exports. Existing telemetry preferences and environment variables do not turn
those senders back on. Local logs and diagnostics remain available, including the option to copy
mobile startup crash logs manually.

Calls you make to model providers, remote environments and other connected services still go to
those services. Those services and their own clients have separate privacy settings. If you
enable remote agent activity for mobile notifications, the relay still receives the notification
data described in [Mobile notifications](./mobile-notifications.md).
