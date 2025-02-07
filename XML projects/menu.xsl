<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
     <xsl:template match="/">
          <html>
               <head>
                    <title>Restaurant Menu</title>
                    <style>
                         body { font-family: Arial, sans-serif; margin: 20px; }
                         table { border-collapse: collapse; width: 100%; }
                         th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                         th { background-color: #f2f2f2; }
                    </style>
               </head>
               <body>
                    <h1>Restaurant Menu</h1>
                    <table>
                         <tr>
                              <th>Category</th>
                              <th>Name</th>
                              <th>Addons</th>
                              <th>Price</th>
                         </tr>
                         <xsl:for-each select="restaurant/dish">
                              <tr>
                                   <td>
                                        <xsl:value-of select="@category" />
                                   </td>
                                   <td>
                                        <xsl:value-of select="name" />
                                   </td>
                                   <td>
                                        <xsl:value-of select="addons" />
                                   </td>
                                   <td>
                                        <xsl:value-of select="price" />
                                   </td>
                              </tr>
                         </xsl:for-each>
                    </table>
               </body>
          </html>
     </xsl:template>
</xsl:stylesheet>