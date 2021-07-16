from datetime import datetime
fmt = "%H:%M:%S"

border = ("*************************************************************")

class Pool_Table:
  def __init__(self, table):
    self.table_number = table
    self.start_time = None
    self.end_time = None
    self.total_time = None
    self.occupied = False

def format_time(dt):
    if dt == None:
        return ("None")
    else:
        return dt.strftime(fmt)

tables = []

for index in range(0, 12):
    table = Pool_Table(index +1)
    tables.append(table)

while True:
    print(border)
    print("1. Please select a pool table to checkout.: ")
    print("2. Which pool table are you checking in?: ")
    print("3. View Table Status: ")
    print("q. q to Exit")
    print(border)
    option = input("Enter option: ")
    if option == "1":
        for table in tables:
            print(f"Table-{table.table_number}")
        print(border)
        option = int(input("Which Table do you wish to checkout?: "))
        table = tables[option -1]
        table.start_time = datetime.now()
        table.occupied = True
    elif option == "2":
        for table in tables:
            print(f"Table {table.table_number}")
        option = int(input("Which Table are you checking in?: "))
        table = tables[option -1]
        table.end_time = datetime.now()
        table.occupied = False
    elif option == "3":
        for table in tables:
            print(f"Table: {table.table_number} - Status: {table.occupied} - Start Time:{table.start_time} - End Time:{table.end_time}")
    elif option == "q":
        break