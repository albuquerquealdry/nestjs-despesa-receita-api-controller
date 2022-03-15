pipeline {
    agent any

    stages {
        stage('Check In') {
            steps {
                sh """ chmod 777 ./pipeline """
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
