pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Delete lock') {
            steps {
                sh 'rm package-lock.json'
            }
        }
        stage('Teste Package') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
