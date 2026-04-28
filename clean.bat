mongo safepay --eval "db.dedups.deleteMany({ expiresAt: { $lt: Math.floor(Date.now()/1000) } })"
