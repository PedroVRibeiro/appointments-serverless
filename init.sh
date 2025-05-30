#!/bin/bash

# Start mongod in background
mongod --port ${MONGO_REPLICA_PORT} --replSet rs0 --bind_ip 0.0.0.0 &
MONGOD_PID=$!

# Wait for MongoDB to start
until mongosh --port ${MONGO_REPLICA_PORT} --eval "db.adminCommand('ping')" >/dev/null 2>&1; do
  echo "Waiting for MongoDB to be ready..."
  sleep 1
done

# Initiate replica set if not already
mongosh --port ${MONGO_REPLICA_PORT} --eval "
  rs.initiate({
    _id: 'rs0',
    members: [{ _id: 0, host: '${MONGO_REPLICA_HOST}:${MONGO_REPLICA_PORT}' }]
  })
"

# Wait for mongod to stop
wait $MONGOD_PID
