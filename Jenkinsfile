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
        sh '''
        if [!"$(sudo docker ps -q -f name=reddit-backend)"];
        then
         if ["$(sudo docker ps -aq -f status=up -f name=reddit-backend)"];
            then
            #STOP THE CONTAINER
            sudo docker stop reddit-backend
         fi
            if ["$(sudo docker ps -aq -f status=exited -f name=reddit-backend)"];
            then
            #REMOVE THE CONTAINER
            sudo docker rm reddit-backend
            fi
        fi
       sudo docker compose up - d
        '''
      }
    }

  }
}