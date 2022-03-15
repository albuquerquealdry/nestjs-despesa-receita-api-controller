pipeline {
    agent any

    stages {
        
        stage('Check In') {
            node('linux') {
            steps {
                sh 'npm install'
            }
        }}
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
