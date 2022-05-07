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
        sh "bash ./container-check.sh"
      }
    }

  }
}