# Product analytics boundary

This fork has no product analytics sender. Legacy interfaces decline events and checks, so older
settings or clients cannot activate an exporter. Local tracing and logs are separate: keep them
local and do not attach a network delegate. Authentication and notification traffic are not
analytics; keep analytics owner and device IDs out of connection URLs.
