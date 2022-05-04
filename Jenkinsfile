pipeline {
    agent any

    stages {
        stage('Build ') {
            steps {
                echo 'Building backend and frontend'
                 sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                 cd ./redit-frontend/src/main/angular-reddit-clone
            }
        }
    }
}