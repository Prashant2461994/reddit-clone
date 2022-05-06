FROM eclipse-temurin:8u332-b09-jre
WORKDIR /opt/
COPY ./target/redit-backend-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java"]
CMD ["-jar" , "-Dspring.profiles.active=prod", "./redit-backend-0.0.1-SNAPSHOT.jar"]