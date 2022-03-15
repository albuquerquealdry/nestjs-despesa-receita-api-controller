pipeline {
    agent any

    stages {
        node('linux') {
        stage('Check In') {
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
