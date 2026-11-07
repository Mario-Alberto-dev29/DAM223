import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import {DataTable } from 'react-native-paper';
import AvatarProfile from '../components/avatar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function ScreenSolicitud() {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     Dato: 'Cupcake',
     Valor: 'Pendiente',
   },
   {
     key: 2,
     Dato: 'Fecha',
     Valor: '04/10/2026',
   },
   {
     key: 3,
     Dato: 'Hora',
     Valor: '11:42 - 1:00',
   },
   {
     key: 4,
     Dato: 'Mensaje',
     Valor: 'Quiero tomar el servicio',
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <View style={styles.container}>
      <AvatarProfile></AvatarProfile>
      <Text>Ramiro Ramirez</Text>
      <View>    
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dato</DataTable.Title>
        <DataTable.Title>Valor</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.Dato}</DataTable.Cell>
          <DataTable.Cell>{item.Valor}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
      </View>
      <Text>Aceptar solicitud?</Text>   
      <Button title='Aceptar'></Button>  
      <Button title='Rechazar'></Button>  
      <Button title='Cancelar'></Button>  
      <StatusBar style="auto" />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});