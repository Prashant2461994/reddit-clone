pipeline {
    agent any

    stages {
        
        stage('Build ') {
            steps {
               sh "pwd"
               sh "mvn clean package"
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
                  dir('./redit-frontend/src/main/angular-reddit-clone') {
                    echo 'pwd'
                 }
            }
        }
    }
}