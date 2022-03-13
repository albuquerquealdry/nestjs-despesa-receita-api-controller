pipeline {
    agent any

    stages {
        stage('Check In') {
            steps {
                sh 'pipeline/checkin.groovy'.execute()
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
