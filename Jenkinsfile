pipeline {
    agent any

    stages {
        stage('Check In') {
            steps {
                sh """ chmod 777 ./pipeline/checkin.sh """
                sh  """ ./pipeline/checkin.groovy """
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
            }
        }
    }
}
