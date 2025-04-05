import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  Modal,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';
const initialContacts = [
  { id: '1', name: 'sadia', number: '123-4567', group: 'Family' },
  { id: '2', name: 'Mehreen', number: '234-5678', group: 'Family' },
  { id: '3', name: 'Rabia', number: '345-6789', group: 'Family' },
  { id: '4', name: 'Areeba', number: '456-7890', group: 'Family' },
  { id: '5', name: 'Eman', number: '567-8901', group: 'Friends' },
  { id: '6', name: 'Ayesha', number: '678-9012', group: 'Work' },
  { id: '7', name: 'laiba', number: '789-0123', group: 'Friends' },
  { id: '8', name: 'Esha', number: '890-1234', group: 'Friends' },
  { id: '9', name: 'Memoona', number: '901-2345', group: 'Work' },
  { id: '10', name: 'Faryal', number: '012-3456', group: 'Work' },
];


type Contact = {
  id: string;
  name: string;
  number: string;
  group?: string;
};

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const groupedContacts = initialContacts.reduce((acc: Record<string, Contact[]>, contact) => {
    const group = contact.group || 'Other';
    if (!acc[group]) acc[group] = [];
    acc[group].push(contact);
    return acc;
  }, {});

  const sections = Object.keys(groupedContacts)
    .map(group => ({
      title: group,
      data: groupedContacts[group].filter(contact =>
        contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.number.includes(searchText)
      )
    }))
    .filter(section => section.data.length > 0);

  const getGroupColor = (group: string) => {
    switch (group) {
      case 'Family': return '#FFEBEE';
      case 'Friends': return '#E8F5E9';
      case 'Work': return '#E3F2FD';
      default: return '#F5F5F5';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />

      <Text style={styles.title}>My Contacts</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#999"
      />

      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => {
              setSelectedContact(item);
              setModalVisible(true);
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={[styles.sectionHeader, { backgroundColor: getGroupColor(section.title) }]}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Contact Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Details</Text>
            {selectedContact && (
              <>
                <Text style={styles.detailText}>👤 Name: {selectedContact.name}</Text>
                <Text style={styles.detailText}>📞 Number: {selectedContact.number}</Text>
                <Text style={styles.detailText}>👥 Group: {selectedContact.group || 'Other'}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: Platform.OS === 'android' ? 40 : 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2C3E50',
    textAlign: 'center',
  },
  searchInput: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    marginBottom: 15,
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  contactItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  number: {
    color: '#7F8C8D',
    marginTop: 6,
    fontSize: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2196F3',
    textAlign: 'center',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 12,
    color: '#444',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});