pipeline {
    agent any

    stages {
        stage('Check In') {
            steps {
                run './pipeline/checkin.groovy'
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