pipeline {
    agent { label 'myapps' }
    stages {
        stage('Build ') {
            steps {
               sh "pwd"
               sh "mvn clean package -X"
            }
        }
        stage('Starting up containerized databases') {
            steps {
                sh 'sudo docker compose up -d'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}