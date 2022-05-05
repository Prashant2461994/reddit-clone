pipeline {
    agent { label 'myapps' }

    stages {
        
        stage('Build ') {
            steps {
               sh "pwd"
               sh "mvn clean package -X"
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
                    sh 'ng serve'
                 }
            }
        }
    }
}