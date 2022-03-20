pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Check In') {
            steps {
                sh 'pipeline/checkin.sh'
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
