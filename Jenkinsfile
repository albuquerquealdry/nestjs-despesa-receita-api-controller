pipeline {
    agent any

    stages {
        stage('Check In') {
            node {
                steps {
                sh """ chmod 777 ./pipeline/checkin.sh """
                sh  """ ./pipeline/checkin.sh """
            
            }
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
