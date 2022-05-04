pipeline {
    agent any

    stages {
        stage('Build ') {
            steps {
                echo 'mvn clean install'
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
                cd './redit-frontend/src/main/angular-reddit-clone'
            }
        }
    }
}