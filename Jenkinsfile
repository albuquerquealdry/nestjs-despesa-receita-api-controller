pipeline {
    agent any

    stages {
        stage('Check In')
                steps {
                sh """ npm i"""
            
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
