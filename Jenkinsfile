pipeline {
    agent { label 'myapps' }
    stages {
        stage('Build ') {
            steps {
               sh "mvn clean package -P build-reddit-clone"
            }
        }
        stage('Starting up containerized databases') {
            steps {
                sh 'sudo docker compose up -d'
            }
        }
        stage('Starting Reddit-Backend With Prod Profile') {
            steps {
            sh 'java -jar -Dspring.profiles.active=prod ./redit-backend/target/redit-backend-0.0.1-SNAPSHOT.jar'
            }
        }
    }
}