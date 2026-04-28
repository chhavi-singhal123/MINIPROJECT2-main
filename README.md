# SafePay – Idempotent Payment Deduplication Service

SafePay is a Node.js microservice that prevents duplicate payment processing using
idempotency keys, MongoDB caching, time-window expiry, Bloom filters, and
automatic cleanup.

Inspired by Stripe and AWS idempotency systems.

## Features
- Express middleware for idempotency keys
- MongoDB-based response caching
- Configurable time window (dedup-policy.json)
- Bloom filter for fast probabilistic checks
- Scheduled cleanup of expired entries
- Policy versioning via Git

## Tech Stack
Node.js, Express, MongoDB, Bloom Filters, Git, Windows Task Scheduler

## How to Run
```bash
npm install
node safepay/src/app.js
