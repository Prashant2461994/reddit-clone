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
        stage('Building Reddit-Backend Docker Image') {
            steps {
            sh 'sudo docker build -t reddit-backend:latest ./redit-backend/Dockerfile'
            }
        }
    }
}