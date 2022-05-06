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
        if [!"$(docker ps -q -f name=reddit-backend)"];
        then
        if ["$(docker ps -aq -f status=up -f name=reddit-backend)"];
        then
        # stop the container
        sudo docker stop reddit-backend
        fi
        if ["$(docker ps -aq -f status=exited -f name=<name>)"];
        then
        # cleanup
        sudo docker rm reddit-backend
        fi
        fi
        sudo docker compose up - d 
        '''
      }
    }

  }
}