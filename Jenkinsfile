pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.. ${BRANCH}' 
                echo 'Building.. %BAR%sd' 
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
                emailext attachmentsPattern: attachPatternStr, 
                body: "test",
                mimeType: 'text/html',
                subject: "test",
                to: "aredondof@viewnext.com",
                from: "jcordero@viewnext.com"
            }
        }
    }
}