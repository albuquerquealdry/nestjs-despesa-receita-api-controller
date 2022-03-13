pipeline {
    agent any

    stages {
        stage('Check In') {
            steps {
                echo './pipeline/checkin.groovy'
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
