pipeline {
    agent any

    stages {
        
        stage('Check In') {
            steps {
                agent { docker 'node' }
                sh 'npm install'
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
