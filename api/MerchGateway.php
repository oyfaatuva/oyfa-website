<?php

class MerchGateway {

    private $db = null;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function findAll()
    {
        $statement = "
            SELECT 
                *
            FROM
                merch;
        ";
        
        $statement = $this->db->query($statement);
        $result = $statement->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public function find($id)
    {
        $statement = "
            SELECT 
                *
            FROM
                merch
            WHERE id = ?;
        ";

        $statement = $this->db->prepare($statement);
        $statement->execute(array($id));
        $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    public function insert(Array $input)
    {
        $statement = "
            INSERT INTO person 
                (price, stock)
            VALUES
                (:price, :stock);
        ";

        $statement = $this->db->prepare($statement);
        $statement->execute(array(
            'price' => $input['price'],
            'stock'  => $input['stock'],
        ));
        return $statement->rowCount();
    }

    public function update($id, Array $input)
    {
        $statement = "
            UPDATE person
            SET 
                price = :price,
                stock  = :stock,
            WHERE id = :id;
        ";

        $statement = $this->db->prepare($statement);
        $statement->execute(array(
            'id' => (int) $id,
            'price' => $input['price'],
            'stock'  => $input['stock'],
        ));
        return $statement->rowCount(); 
    }

    public function delete($id)
    {
        $statement = "
            DELETE FROM person
            WHERE id = :id;
        ";

        $statement = $this->db->prepare($statement);
        $statement->execute(array('id' => $id));
        return $statement->rowCount();  
    }
}