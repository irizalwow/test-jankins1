pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building.. ${BRANCH}"
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
                echo 'Deploy..'
            //     emailext attachmentsPattern: attachPatternStr, 
            //     body: "test",
            //     mimeType: 'text/html',
            //     subject: "test",
            //     to: "aredondof@viewnext.com",
            //     from: "jcordero@viewnext.com"
            }
        }
    }
}