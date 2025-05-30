ARG MONGO_VERSION
FROM mongo:${MONGO_VERSION}

COPY init.sh /init.sh
RUN chmod +x /init.sh

ENTRYPOINT ["/init.sh"]