pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/opt/homebrew/bin:$PATH" //  chemin à Node.js 
    }

    stages {
        stage('Check Node.js') {
            steps {
                sh 'node -v'
            }
        }

        stage('Run JS') {
            steps {
                sh 'node test.js' 
            }
        }
    }
}
