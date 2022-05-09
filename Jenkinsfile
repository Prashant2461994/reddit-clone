pipeline {
  agent {
    label 'myapps'
  }

  environment {
    REDDIT_NG_SOURCE = "./redit-frontend/src/main/angular-reddit-clone/dist/angular-reddit-clone/*"
    REDDIT_NG_DESTINATION = "/var/www/reddit/"
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

    stage('Setting up reddit front') {
      steps {
        sh "sudo rm -rv ${REDDIT_NG_DESTINATION}*"
        sh "sudo cp -r ${REDDIT_NG_SOURCE} ${REDDIT_NG_DESTINATION}"
      }
    }

  }
}