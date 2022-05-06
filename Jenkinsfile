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
        stage('Copying reddit-frontend to apache document root') {
            steps {
           // sh 'sudo docker build -t reddit-backend:latest ./redit-backend/Dockerfile'
            }
        }
    }
}