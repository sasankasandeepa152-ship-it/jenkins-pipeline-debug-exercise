pipeline {
    agent any

    environment {
        APP_NAME = 'debug-exercise'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/username/nonexistent-repo.git'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run biuld'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy to Production') {
            when {
                branch 'main'
            }

            steps {
                echo 'Deploying...'
                echo "Using password: ${env.DB_PASSWORD}"
            }
        }
    }
}