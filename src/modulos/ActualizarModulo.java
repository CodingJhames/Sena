/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package modulos;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author JAMES
 */
public class ActualizarModulo {
    
    
    public static void main(String[] args) throws SQLException {
        
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
        }
        
         try {
             
            conexion = DriverManager.getConnection( url, user, password );
            statement = conexion.createStatement();
             
          
            // Agregar comillas simples alrededor de los valores y corregir las columnas en VALUES
            statement.executeUpdate( "UPDATE CLIENTE SET NOMBRE = 'JHON' WHERE NOMBRE = 'JHAMES'" );
            
            rs = statement.executeQuery( "SELECT * FROM CLIENTE" );
            
            //Mover el bloque do-while dentro del bloque try
            rs.next();
            
            do {
                 // Usar las columnas correctas en la impresión
                System.out.println(rs.getInt("IDCLIENTE") + ":" + rs.getString("NOMBRE") + ":" + rs.getString("CONTRASEÑA"));
            } while( rs.next() );
         
            
        } catch (SQLException ex) {
            Logger.getLogger(InsertarModulo.class.getName()).log(Level.SEVERE, null, ex);
        }
           
    }
    
    
}
