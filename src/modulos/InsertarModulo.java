/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package modulos;

/**
 *
 * @author JAMES
 */

import com.mysql.cj.protocol.Resultset;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class InsertarModulo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String user = "root";
        String password = "1234";
        String url = "jdbc:mysql://localhost:3306/ohahsis_db";
        Connection conexion;
        Statement statement;
        ResultSet rs;
           
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(InsertarModulo.class.getName()).log(Level.SEVERE, null, ex);
        };
        
        try {
            conexion = DriverManager.getConnection( url, user, password );
            statement = conexion.createStatement();
            
             // Corrección: Agregar comillas simples alrededor de los valores y corregir las columnas en VALUES
            statement.executeUpdate( "INSERT INTO CLIENTE(Nombre, Apellido, Correo, username, contraseña) VALUES('JHAMES','MEJIA','JAMES@EMAIL.COM','CODINGJAMES','JAMES1234')");
            rs = statement.executeQuery("SELECT * FROM CLIENTE");
            rs.next();
            
            // Corrección: Mover el bloque do-while dentro del bloque try
            do {
                // Corrección: Usar las columnas correctas en la impresión
                System.out.println(rs.getInt("idCliente") + ":" + rs.getString("nombre") + ":" + rs.getString("CONTRASEÑA"));
            }while ( rs.next() );
            
            } catch (SQLException ex) {
                Logger.getLogger(InsertarModulo.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
}
