import React, { useState } from 'react';
import { View, Text, TextInput, Modal, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import Colors from '../../Utils/Colors';
import { FlatList } from 'react-native';
import Header from '../HomeScreen/header';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';


const AjouterJob = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const closePopup = () => {
        setPopupVisible(false);
    };
    const handleTabPress = (tabName: string) => {
        setSelectedTab(tabName);
    };
    const [ajoutjob, setAjoutjob] = useState('');
    const [ajoutjob_desc, setAjoutjobDesc] = useState('');
    const [ajoutjob_loc, setAjoutjobLoc] = useState('');
    const [ajoutjob_duree, setAjoutjobDuree] = useState('');
    const [ajoutjob_tarif, setAjoutjobTarif] = useState('');
    const [ajoutjob_competences, setAjoutjobcompetences] = useState('');
    const [ajoutjob_aPropos, setAjoutjobaPropos] = useState('');

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDk0ODE5NzksImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aGVhc3QtMi5oeWdyYXBoLmNvbS92Mi9jbHQ3NDNzZG8wbWx3MDd1czJhcXZlbHZ1L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLXNvdXRoZWFzdC0yLmh5Z3JhcGguY29tLyIsInN1YiI6IjA0YzZmYzM2LTdiNjYtNDdiYy04ZmFmLTc4YmU5YmM2NjNmZCIsImp0aSI6ImNsdGJwZmxkczBqc2kwNzJxZWdnejA0eW4ifQ.ZhbLRATjaBePjfjJYYUR6AaezWWDdKF4iQQEhA9KYRC77QwXHuH-SvTy72FNZngmjLxMdeFhHIQLvrC96FKEzei_kCy71KlHaKzfsJJDVHRI4hcxiTYufvlsLtb8baLhZLUKMUfV4XxY0WnFjGMJc0YGe4TVSonkgnNAOGtQEBQ__V30Fos8Sq8oHTEpGkCJfLkLfZX4i7DTnYk-S1jstP52dtxQSAle8D9JGdjuNZf6bbUNXpg7_85ltO-jN96DIImPVbr5bRLaL9kCmysyT1ewM8VhIJv_SYL_4sMVD_9GfG__2rMwbNtGC34GIED0Gqrzu2wvW832hYrRYp2DKi4egb7gwr26G-grEKKtuDl0wL3wL2O_zBk3Ky8lp5x7IVZv06sKpocq_70hBdGrsX82O0ZlapWuxk3-9Nzoy0WiMNyfrI-zrdkDpgllgjyi8gP3IkiwM53kcpPjWddSXrYxNB4egpIpOXjwVZHzlrCCtguDQxLLc6tASa1DL2eqhWZZv2lDFfJt4c29P2YiL9cQqKyyDjaooVfdw_jdGFDUbcK3jdlgpkstgfYlyDaDFdV9SlhM0m9T-Y-Qo9RtOr8wCAjY3SXIJuOEpyTuTz1gXG25iD3RzuP6XtP6YVsg1cZQPoybnVqD9Hlo-xrtzHnj2fcZuXu3Z-ZFdCrBlLo";
    const navigation = useNavigation();

    const [categories, setCategories] = useState([
        { id: '1', label: 'Communication', active: false },
        { id: '2', label: 'Restauration', active: false },
        { id: '3', label: 'Design', active: false },
        { id: '4', label: 'Aide à domicile', active: false },
        { id: '5', label: 'Livraison', active: false },
        { id: '6', label: 'Ajouter', active: false },
    ]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.pill, { backgroundColor: item.active ? '#FFE0E1' : '#D8DCF2' }]}
            onPress={() => {
                const updatedCategories = categories.map(cat =>
                    cat.id === item.id ? { ...cat, active: !cat.active } : cat
                );
                setCategories(updatedCategories);
            }}>
            <Text style={{ color: item.active ? Colors.light.accent : Colors.light.primary }}>{item.label}</Text>
        </TouchableOpacity>
    );
    const saveData = async () => {
        try {
            const result = await fetch("https://api-ap-southeast-2.hygraph.com/v2/clt743sdo0mlw07us2aqvelvu/master", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    query: `mutation {
                        createJob(
                            data: {
                                titre: "${ajoutjob}",
                                jobDescription: "${ajoutjob_desc}",
                                jobLocation: "${ajoutjob_loc}",
                                jobSalary: "${ajoutjob_tarif}",
                                jobHours: "${ajoutjob_duree}"
                                aPropos: "${ajoutjob_aPropos}"
                                competences: "${ajoutjob_competences}"

                            }) {
                                id
                            }
                        }`
                })
            });
            const data = await result.json();
            console.log(data); // Affichez les données retournées par l'API
            if (result.ok) {
                console.log("Le job a été ajouté");
                // Récupérer l'id du job nouvellement ajouté
                const jobId = data.data.createJob.id;
                // Mettre à jour le statut du job en publié (publié)
                const updateResult = await fetch("https://api-ap-southeast-2.hygraph.com/v2/clt743sdo0mlw07us2aqvelvu/master", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        query: `mutation {
                            publishJob(
                                where: { id: "${jobId}" }, to: PUBLISHED) {
                                id
                            }
                        }`
                    })
                });
                const updateData = await updateResult.json();
                console.log(updateData);
                if (updateResult.ok) {
                    console.log("Le job a été publié avec succès");
                } else {
                    console.error("Erreur lors de la publication du job:", updateData.error);
                }
            } else {
                console.error("Erreur lors de l'ajout du job:", data.error);
            }
        } catch (error) {
            console.error("Erreur lors de la requête:", error);
        }

    };

    return (
        <ScrollView>
            <Header />
            <View style={styles.container}>
                <Text style={styles.label}>Ajouter un Job*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le nom du Job"
                    value={ajoutjob}
                    onChangeText={(text) => setAjoutjob(text)}
                />
                <Text style={styles.label}>Localisation*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer la localisation du Job"
                    value={ajoutjob_loc}
                    onChangeText={(text) => setAjoutjobLoc(text)}
                />
                <Text style={styles.label}>Catégorie</Text>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 8, overflow: 'visible' }}
                />
                <Text style={styles.label}>Durée*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le nombre d'heure par semaine"
                    value={ajoutjob_duree}
                    onChangeText={(text) => setAjoutjobDuree(text)}
                />
                <Text style={styles.label}>Tarif Horaire*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le tarif horaire du Job"
                    value={ajoutjob_tarif}
                    onChangeText={(text) => setAjoutjobTarif(text)}
                />
                <Text style={styles.label}>Description*</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer la description du Job"
                    value={ajoutjob_desc}
                    onChangeText={(text) => setAjoutjobDesc(text)}
                />
                <Text style={styles.label}>Compétences</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Entrer les compétences du Job"
                    value={ajoutjob_competences}
                    onChangeText={(text) => setAjoutjobcompetences(text)}
                />
                <Text style={styles.label}>A propos </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Entrer A propos de votre Entreprise"
                    value={ajoutjob_aPropos}
                    onChangeText={(text) => setAjoutjobaPropos(text)}
                />
                <TouchableOpacity
                    onPress={() => {
                        setPopupVisible(true)
                        console.log("Le BOUTTON a été PRESSE"); // Message console pour vérifier si le bouton est pressé
                        saveData();
                    }}
                    style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Créer le Job</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={isPopupVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setPopupVisible(false)}
            >
                onPress={() => navigation.navigate('jobs')}
            </Modal>
        </ScrollView>
    );
};


export default AjouterJob;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 0,
        paddingHorizontal: 33,
        backgroundColor: Colors.light.background,
        paddingBottom: 30,
    },
    input: {
        padding: 15,
        marginTop: 8,
        borderRadius: 5,
        backgroundColor: '#F3F4FB'
    },
    pill: {
        borderRadius: 666,
        paddingVertical: 7,
        paddingHorizontal: 14,
        marginRight: 10,
    },
    label: {
        fontSize: 14,
        color: Colors.light.primary,
        marginTop: 16,
    },
    buttonWrapper: {
        backgroundColor: Colors.light.accent,
        paddingVertical: 14,
        marginHorizontal: 'auto',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 41,
    },
    buttonText: {
        color: Colors.light.background,
        fontSize: 16,
        fontWeight: '600',
    },
    sousmodal: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
    },
    modal: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        alignItems: 'center',
        height: '40%',


    },
    buttonTextModal: {
        color: Colors.light.background,
        fontSize: 16,
        fontWeight: '600',
    },
    buttonWrapperModal: {
        backgroundColor: Colors.light.accent,
        paddingVertical: 14,
        marginHorizontal: 'auto',
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: "20%",
        zIndex: 1,
        position: 'relative',
    }
})

function setSelectedTab(tabName: string) {
    throw new Error('Function not implemented.');
}
