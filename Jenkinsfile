pipeline {

  agent {
    label 'myapps'
  }

  environment {
    REDDIT_NG_SOURCE_LOC = "./redit-frontend/src/main/angular-reddit-clone/dist/angular-reddit-clone/*"
    REDDIT_NG_DESTINATION_LOC = "/var/www/reddit/"
    HTACCESS_FILE_LOC = "./redit-frontend/src/main/angular-reddit-clone/apache.htacess"
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
        sh "sudo cp -r ${REDDIT_NG_SOURCE_LOC} ${REDDIT_NG_DESTINATION_LOC}"
        sh "sudo chmod 777 -R ${REDDIT_NG_DESTINATION_LOC}*"
        sh "sudo mv ${HTACCESS_FILE_LOC}  ${REDDIT_NG_DESTINATION_LOC}"
        sh "sudo chmod 777 -R ${REDDIT_NG_DESTINATION_LOC}*"
      }
    }

  }
}