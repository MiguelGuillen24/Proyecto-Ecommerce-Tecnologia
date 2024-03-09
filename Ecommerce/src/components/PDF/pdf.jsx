import {Document, Text, Page, StyleSheet, Image} from '@react-pdf/renderer';

function PDF(){
    return (
        <Document>
            <Page>
                <Text><Image className='icon_header' src="https://cdn-icons-png.flaticon.com/512/12250/12250131.png"/>Hello World</Text>
                <Text>
                    Prueba de texto de cuerpo
                </Text>
            </Page>
        </Document>
    )
}

export default PDF;