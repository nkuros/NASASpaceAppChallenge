class Ship:
    def __init__(self, name, row, col, science=0, materials=0, fuel=100, science_rate=0, materials_rate=0, age=0):
        self.name = name
        self.row = row
        self.col = col
        self.science = science
        self.materials = materials
        self.fuel = fuel
        self.science_rate = science_rate
        self.materials_rate = materials_rate
        self.age = age

    def get_node(self):
        return {'name':self.name,'row':self.row,'col':self.col,'science':self.science,'materials':self.materials, 'fuel':self.fuel, 'science_rate':self.science_rate, 'materials_rate':self.materials_rate, 'age':self.age}
