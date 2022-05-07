#!/bin/sh
container_name="reddit-backend";
readonly container_name
result=$( sudo docker ps -a |  awk 'NR > 1 {print $NF}' | grep $container_name)
echo $result
if [[ -n "$result" ]]; then
  #STOP THE RUNNING CONTAINER
  sudo docker stop $container_name;
  #REMOVE THE RUNNING CONTAINER
  sudo docker rm $container_name;
  #STARTING THE DOCKER COMPOSE
  sudo docker-compose up -d;
else
echo "$container_name container does not exists. Creating new containers";
sudo docker-compose up -d;
fi
