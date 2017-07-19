/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author ASUS
 */
public class DatabaseAccess {
    private Connection conn;
    private boolean isFree = true;
    
    private static final String driverName = "oracle.jdbc.driver.OracleDriver";
    private static final String url = "jdbc:oracle:thin:@//localhost:1525/pdbhoney";
    private static final String username = "zainalm";
    private static final String password = "manager";
    private static DatabaseAccess _instance;

    public static DatabaseAccess getInstance() {
        if (_instance == null){
            try {
                _instance = new DatabaseAccess();
            } catch (Exception e){
                e.printStackTrace();
            }
        }
        return _instance;
    }

    public DatabaseAccess() throws Exception {
        try {
            Class.forName(driverName).newInstance();
            connect();
            
        }catch(ClassNotFoundException | SQLException e){
            e.printStackTrace();
            throw new Exception();
        }
    }

    private void connect() throws SQLException{
        conn = DriverManager.getConnection(url,username,password);
    }
    
    public synchronized Connection getConnection(){
        while(!isFree){
            try{
                wait();
            }catch(InterruptedException e){
                e.printStackTrace();
            }
        }
        isFree = false;
        notify();
        return conn;
    }
    
    public synchronized void releaseConnection(){
        while(isFree){
            try{
                wait();
            }catch(InterruptedException ie){
                ie.printStackTrace();
            }
        }
        isFree = true;
        notify();           
    }
}
