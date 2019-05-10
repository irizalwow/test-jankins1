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
                emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
                echo 'Deploying....'
            }
        }
    }
}