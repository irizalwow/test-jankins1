pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..a.' 
                // powershell 'sfdx force:org:list'
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
        post {
            always {
                echo 'Sending....'
                emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
            }
        }
    }
}