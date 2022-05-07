pipeline {
  agent {
    label 'myapps'
  }
  stages {
    stage('Build ') {
      steps {
        sh "mvn clean package -P build-reddit-clone"
      }
    }
    
    stage('Starting up containerized databases') {
      steps {
        sh "sudo docker compose down"
        sh "bash ./container-check.sh"
      }
    }

  }
}