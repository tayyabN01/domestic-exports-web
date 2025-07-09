import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeatherAnalysisCharts = () => {
  // Color palette using brand tan colors
  const colors = {
    durability: '#6e5a4a', // tan-800 - darkest for strength
    appearance: '#b4987e', // tan-500 - main brand color
    aging: '#866d57', // tan-700 - mature aged color
    softness: '#f5f1ed', // tan-100 - lightest for softness
    affordability: '#cab5a0', // tan-400 - mid-range
    luxury: '#6e5a4a', // tan-800 - dark for luxury
    ecoFriendly: '#a08368', // tan-600 - natural earth tone
    colorRichness: '#ddd0c1', // tan-300 - rich but light
    waterResistance: '#866d57', // tan-700 - robust tone
    speed: '#a08368' // tan-600 - efficient tone
  };

  const leatherTypes = [
    {
      name: 'Full-Grain Leather',
      caption: 'Unprocessed surface, strongest structure — ideal for timeless, high-end goods.',
      data: [
        { name: 'Durability', value: 25, color: colors.durability },
        { name: 'Natural Appearance', value: 25, color: colors.appearance },
        { name: 'Aging & Patina', value: 20, color: colors.aging },
        { name: 'Softness', value: 10, color: colors.softness },
        { name: 'Affordability', value: 5, color: colors.affordability },
        { name: 'Luxury Grade', value: 15, color: colors.luxury }
      ]
    },
    {
      name: 'Top-Grain Leather',
      caption: 'Sanded surface, smooth finish — refined look with high-end appeal.',
      data: [
        { name: 'Durability', value: 20, color: colors.durability },
        { name: 'Natural Appearance', value: 15, color: colors.appearance },
        { name: 'Aging & Patina', value: 15, color: colors.aging },
        { name: 'Softness', value: 20, color: colors.softness },
        { name: 'Affordability', value: 15, color: colors.affordability },
        { name: 'Luxury Grade', value: 15, color: colors.luxury }
      ]
    },
    {
      name: 'Genuine Leather',
      caption: 'Economical choice, still real leather but heavily processed.',
      data: [
        { name: 'Durability', value: 15, color: colors.durability },
        { name: 'Natural Appearance', value: 10, color: colors.appearance },
        { name: 'Aging & Patina', value: 5, color: colors.aging },
        { name: 'Softness', value: 20, color: colors.softness },
        { name: 'Affordability', value: 40, color: colors.affordability },
        { name: 'Luxury Grade', value: 10, color: colors.luxury }
      ]
    },
    {
      name: 'Split Leather',
      caption: 'Lower layer of hide — flexible and cost-effective for casual goods.',
      data: [
        { name: 'Durability', value: 10, color: colors.durability },
        { name: 'Natural Appearance', value: 5, color: colors.appearance },
        { name: 'Aging & Patina', value: 5, color: colors.aging },
        { name: 'Softness', value: 30, color: colors.softness },
        { name: 'Affordability', value: 45, color: colors.affordability },
        { name: 'Luxury Grade', value: 5, color: colors.luxury }
      ]
    }
  ];

  const tanningMethods = [
    {
      name: 'Vegetable Tanning',
      caption: 'Natural, eco-conscious finish — takes time, but ages beautifully.',
      data: [
        { name: 'Eco-Friendly', value: 30, color: colors.ecoFriendly },
        { name: 'Aging / Patina', value: 25, color: colors.aging },
        { name: 'Softness', value: 10, color: colors.softness },
        { name: 'Color Richness', value: 15, color: colors.colorRichness },
        { name: 'Water Resistance', value: 10, color: colors.waterResistance },
        { name: 'Production Speed', value: 10, color: colors.speed }
      ]
    },
    {
      name: 'Chrome Tanning',
      caption: 'Fast, flexible, and colorful — but less sustainable.',
      data: [
        { name: 'Eco-Friendly', value: 5, color: colors.ecoFriendly },
        { name: 'Aging / Patina', value: 5, color: colors.aging },
        { name: 'Softness', value: 30, color: colors.softness },
        { name: 'Color Richness', value: 25, color: colors.colorRichness },
        { name: 'Water Resistance', value: 20, color: colors.waterResistance },
        { name: 'Production Speed', value: 15, color: colors.speed }
      ]
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">{data.value}%</p>
        </div>
      );
    }
    return null;
  };

  const ChartCard = ({ title, data, caption }: { title: string; data: any[]; caption: string }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-playfair text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground text-center italic leading-relaxed">
          {caption}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}: {item.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair text-foreground mb-4">
            Comparing Leather Grades by Key Qualities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the characteristics that define different leather types and tanning methods helps you make informed decisions for your projects
          </p>
        </div>

        {/* Leather Types Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair text-foreground text-center mb-8">
            Leather Types Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {leatherTypes.map((leather, index) => (
              <ChartCard
                key={index}
                title={leather.name}
                data={leather.data}
                caption={leather.caption}
              />
            ))}
          </div>
        </div>

        {/* Tanning Methods Section */}
        <div>
          <h3 className="text-2xl font-playfair text-foreground text-center mb-8">
            Tanning Methods Comparison
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tanningMethods.map((method, index) => (
              <ChartCard
                key={index}
                title={method.name}
                data={method.data}
                caption={method.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeatherAnalysisCharts;